import clsx from 'clsx';

interface props {
    text: string;
    style_class: string;
}

export const Badge: React.FC<props> = ({ text, style_class }) => {
    const class_str = clsx("badge", style_class)
    return <div className="badge">{text}</div>;
};
