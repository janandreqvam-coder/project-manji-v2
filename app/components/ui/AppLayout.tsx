import Layout from "./Layout";
import SiteContainer from "./SiteContainer";

type Props = {
  children: React.ReactNode;
};

export default function AppLayout({
  children,
}: Props) {
  return (
    <Layout>
      <SiteContainer>
        {children}
      </SiteContainer>
    </Layout>
  );
}