import Link from "next/link";
import { useRecoilValue } from "recoil";
import { countState, userState } from "../components/atoms";

const About = () => {

    //atomの値の操作を定義（read only)
    const count = useRecoilValue(countState);
    const user = useRecoilValue(userState);

    return (
        <>
            <h1>About</h1>
            <div>
                <p>count:{count}</p>
                <p>user.name:{user.name}</p>
                <p>user.age:{user.age}</p>
            </div>
            <hr/>
            <div>
                <Link href="/"><a>Home</a></Link>
            </div>
        </>
    );
}

export default About;