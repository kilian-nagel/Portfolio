interface props {
    text: string;
}

export const Badge: React.FC<props> = ({ text }) => {
    return <div className="badge text">{text}</div>;
};
