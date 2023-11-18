import { HeaderNav } from "components/HeaderNav";
import SocialFooter from "components/SocialFooter";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="grow">
        <div className="wrapper">
          <HeaderNav className="mb-md" />
          {children}
        </div>
      </div>
      <SocialFooter className="wrapper" />
    </div>
  );
}
