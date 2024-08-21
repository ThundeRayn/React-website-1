import { AppRoutes } from './AppRoutes';

//data here
export * as loadData from './data/loadData';

//milestone
export const mstypes = ["task goal", "revenue goal"]
//tasks
export const tstypes = ["M1", "M2"]



function App() {

  return (
    <div>
      <AppRoutes />
    </div>)

}

export default App;