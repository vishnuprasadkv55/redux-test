import { CounterProvider } from "./counter-context";
import { UserProvider } from "./logged-context";

export const AllProvider = ({ children}) => {
    console.log('provider')
  const totalProviders = [CounterProvider, UserProvider];
  return (<>
      {totalProviders.reduce((accumulator, Current) => {
        return <Current> {accumulator}</Current>;
      }, children)}
    </>
  );
};
