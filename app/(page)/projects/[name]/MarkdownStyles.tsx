export const H1 = ({ children }: { children: string }) => {
  return (
    <h1 className="font-bold text-3xl py-3 my-3 border-b-2 w-full border-white/10">
      {children}
    </h1>
  );
};

export const H2 = ({ children }: { children: string }) => {
  return (
    <h2 className="font-bold text-2xl py-3 my-3 border-b-2 w-full border-white/10">
      {children}
    </h2>
  );
};

export const H3 = ({ children }: { children: string }) => {
  return (
    <div className="font-bold text-2xl py-3 my-3 border-b-2 w-full border-white/10">
      {children}
    </div>
  );
};

export const P = ({ children }: { children: string }) => {
  return <p className="text-xl font-light pb-2 ">{children}</p>;
};

export const Strong = ({ children }: { children: string }) => {
  return (
    <strong className="text-xl font-bold pb-1 inline-block">{children}</strong>
  );
};

export const Ul = ({ children }: { children: string }) => {
  return (
    <li className="text-xl font-light pb-1 inline-block list-disc pl-3">
      {children}
    </li>
  );
};

export const Li = ({ children }: { children: string }) => {
  return <li className="text-xl font-bold pb-1 inline-block">{children}</li>;
};

const styles = {
  h1: {
    component: H1,
  },
  h2: {
    component: H2,
  },
  p: {
    component: P,
  },
  strong: {
    component: Strong,
  },
  ul: {
    component: Ul,
  },
};

export default styles;
