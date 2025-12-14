import Heading2 from "@/components/ui/Heading2/Heading2";
import InputField from "@/components/ui/InputField/InputField";

export const CorporativeForm = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <form>
          <Heading2 color="white">Хотите задать нам вопрос?</Heading2>
          <InputField placeholder="Как к вам обращаться?" color="white" />
        </form>
      </div>
    </div>
  );
};
