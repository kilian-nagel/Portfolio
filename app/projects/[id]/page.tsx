'use client';
import Link from 'next/link';
import { Badge } from '../../../components/generic/badge';
import {
    ILongProject,
    ILongProjectsApiResponse
} from '../../../components/interfaces/project';
import '../../../styles/footer.css';
import '../../../styles/mixins.css';
import '../../../styles/navbar.css';
import '../../../styles/normalize.css';
import '../../../styles/reset.css';
import '../../../styles/style.css';
import '../../../styles/utility.css';
import '../../../styles/variables.css';
import '../../../styles/project-1.css';
import '../../../styles/projet-professionnel.css';
import { getLongProjectQuery } from '../../../data/queries';
import { fetcher } from '../../../data/fetch';
import useSWR from 'swr';
import { Category } from '../../../components/projectPage/category';
import sanitizeHtml from 'sanitize-html';
import Skeleton from 'react-loading-skeleton';
import { ErrorBoundary } from 'next/dist/client/components/error-boundary';
export default function Page({ params }: { params: { id: string } }) {
    // Si la clé n'est pas chargé on renvoie un message d'attente à l'user
    const startCondition = !process.env.NEXT_PUBLIC_API_URL || !params.id;

    // On récupère l'id du projet.
    const parsedId = params.id.split('.')[0];

    // Si la clé de l'api n'est pas chargé alors
    const variablesNotInitialized = startCondition || !parsedId;
    const { data, isLoading, error } = useSWR<
        ILongProjectsApiResponse | undefined
    >(variablesNotInitialized ? null : process.env.NEXT_PUBLIC_API_URL, () =>
        fetcher<ILongProjectsApiResponse>(
            process.env.NEXT_PUBLIC_API_URL || '',
            getLongProjectQuery(parsedId)
        )
    );

    const loader = (
        <div id="presentation">
            <img
                src="/media/background-202020.png"
                style={{ maxWidth: '640px' }}
                alt="image"
            />
            <div>
                <Skeleton baseColor="#202020" highlightColor="#444" />
            </div>
        </div>
  );

  if(isLoading) return loader;

  if(!data || variablesNotInitialized || error ){
    return <div>error</div>;
  }

  const project:ILongProject = data.data.posts[0];
  if(!project || !project.content || !project.content.html) return <div>error...</div>;
  
  const metadata = {
    "Type de projet":project.typeOfProject,
    "Type d'application":project.typeOfApplication,
    "Dates":project.dates
  }


  // On nettoie le html fourni par le CRM avant de l'injecter
  const sanitizedHtml = sanitizeHtml(project.content.html);


  return (
      <main>
        <section id="presentation">
          <img 
            src={project.coverImage.url}
            alt=""
            style={{ maxWidth: "640px" }}
          />
          <div className="info">
            <div className="up">
              <h3 className="bold-900 fs-800">{project.title}</h3>
              <div className="badges">
                {project.tags.map((tag) => (
                  <Badge key={tag} text={tag} />
                ))}
              </div>
              <p className="text fs-200">{project.excerpt}</p>
            </div>
            <div className="down">
              <Link href="">github</Link>
            </div>
          </div>
        </section>

        <section id="info">
            <div className="content">
                {
                    Object.keys(metadata).map(key=><Category key={key} category={key} content={metadata[key]}/>)
                } 
            </div>
        </section>

        <div id="sections">
            <aside id="aside">
                <div className="content">
                    <p className="text bold-900">Navigation</p>
                    <ul style={{listStyle: "none"}}>
                        <li className="text"><a href="#context">Contexte du projet</a></li>
                        <li className="text"><a href="#skills">Apprentissages</a></li>
                        <li className="text"><a href="./">Résultats</a></li>
                    </ul>
                </div>
                <a id="top-link" href="#header">aller à l'en-tête de page</a>
            </aside>
            <div className="content" dangerouslySetInnerHTML={{ __html: sanitizedHtml}}>
            </div>
        </div>
      </main>
  );
}
