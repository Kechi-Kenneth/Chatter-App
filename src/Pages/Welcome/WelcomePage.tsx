
import WelcomePageNavBar from "./WelcomePageNavBar";
import WelcomeBody from "./WelcomeBody/welcomeBody";
import WelcomeFooter from "./WelcomeFooter/WelcomeFooter";

const WelcomePage = () => {
  const NavBarItems: Array<{
    type: "text" | "icon";
    item: string;
    icon?: string;
    className?: string;
  }> = [
    { type: "text", item: "Features", className: "features" },
    { type: "text", item: "Membership", className: "memberships" },
    { type: "text", item: "Sign In", className: "sign-in" },
    { type: "text", item: " More>", className: "more" },
    {
      type: "icon",
      item: "Write",
      icon: "icons8-create-post-64.png",
      className: "create-post",
    },
  ];

  return (
    <div>
      <WelcomePageNavBar
        title="ChaTTer"
        icon="icons8-favorite-chat-message-100.png"
        items={NavBarItems}
      />
    <WelcomeBody />
    <div>
    <WelcomeFooter />
    </div>
    </div>
  );
};

export default WelcomePage;
