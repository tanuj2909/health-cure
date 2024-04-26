export default function HomeLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <div className="h-full bg-home">
        {children}
    </div>
  );
}
