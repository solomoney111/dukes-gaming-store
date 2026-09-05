import { useEffect, useState } from "react";

export interface Route {
  path: string;
  segments: string[];
  params: URLSearchParams;
}

function parseHash(): Route {
  const raw = window.location.hash.replace(/^#/, "") || "/";
  const [path, query = ""] = raw.split("?");
  return {
    path,
    segments: path.split("/").filter(Boolean),
    params: new URLSearchParams(query),
  };
}

export function useRoute(): Route {
  const [route, setRoute] = useState<Route>(parseHash);
  useEffect(() => {
    const onChange = () => setRoute(parseHash());
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);
  return route;
}

export function navigate(to: string) {
  window.location.hash = to;
}

export function Link({
  to,
  className,
  children,
  onClick,
  ariaLabel,
  style,
}: {
  to: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  ariaLabel?: string;
  style?: React.CSSProperties;
}) {
  return (
    <a href={`#${to}`} className={className} aria-label={ariaLabel} onClick={onClick} style={style}>
      {children}
    </a>
  );
}
