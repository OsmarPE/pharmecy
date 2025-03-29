
interface Props {
    children: React.ReactNode;
    className?: string;
    modeEdit?: boolean;
}

export default function BannerAside({ children, className = '', modeEdit }: Props) {
    return (
        <aside className="grid gap-4 ">
                {children}
        </aside>
    )
}
