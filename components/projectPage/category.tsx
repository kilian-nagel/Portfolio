interface props {
    category: string;
    content: string;
}

export const Category: React.FC<props> = ({ category, content }) => {
    return (
        <div>
            <p className="category texté bold-700">{category}</p>
            <p className="text">{content}</p>
        </div>
    );
};
