import { ReactNode } from "react";
import clsx from "clsx";

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Card({ children, className, onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={clsx(
        "rounded-2xl border bg-white shadow-sm transition hover:shadow-md cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children }: { children: ReactNode }) {
  return <div className="p-4 border-b">{children}</div>;
}

export function CardTitle({ children }: { children: ReactNode }) {
  return <h2 className="text-lg font-semibold">{children}</h2>;
}

export function CardContent({ children }: { children: ReactNode }) {
  return <div className="p-4 text-gray-600">{children}</div>;
}
