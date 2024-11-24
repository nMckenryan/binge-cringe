"use client";

export default function UICard({ children }: { children: React.ReactNode }) {
  return (
    <main className="bg-background-black flex min-h-screen flex-col items-center justify-center text-white">
      <div className="card bg-primary text-primary-content w-96">
        <div className="card-body">{children}</div>
      </div>
    </main>
  );
}
