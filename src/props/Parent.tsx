import { Child } from './Child';

const Parent = () => {
    return <Child color="string" onClick={() => {console.log("hello")} }/>
}

export default Parent;