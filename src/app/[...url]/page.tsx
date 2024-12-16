// import { PageProps } from "../../../.next/types/app/layout";
interface PageProps {
    params: {
        url: string | string[] | undefined;
    }
}
const page = (params: PageProps) => {
    console.log(params);
    return (
        <div>
            <h1>Page</h1>
        </div>
    );
}
export default page;