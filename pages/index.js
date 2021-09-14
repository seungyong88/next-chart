import Bar from '../components/Bar';
import Pie from "../components/Pie";
import TimeRange from "../components/TimeRange";
// import TreeMap from "../components/TreeMap";

export default () => (
  <div style={{height: 3000}}>

    예제 사이트 
    <h1><a href="https://nivo.rocks/">https://nivo.rocks/</a></h1>
    <h1>Bar</h1>
    <Bar />
    <h1>Pie</h1>
    <Pie />
    <h1>TimeRange</h1>
    <TimeRange />
    <h1>TreeMap</h1>
    {/* <TreeMap /> */}
  </div>
)