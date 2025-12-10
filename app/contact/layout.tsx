export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className='h-screen overflow-y-auto overflow-x-hidden'>
            {children}
        </div>
    );
}
