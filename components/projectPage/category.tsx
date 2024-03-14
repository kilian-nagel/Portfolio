interface props {
    category: string;
    content: string;
}

export const Category: React.FC<props> = ({ category, content }) => {
    return (
        <div>
            <p className="category text">{category}</p>
            <p className="text">{content}</p>
        </div>
    );
};
