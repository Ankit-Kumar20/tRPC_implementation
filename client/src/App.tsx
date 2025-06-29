// import './App.css'
import { createTRPCClient, httpBatchLink, loggerLink } from '@trpc/client';
import type { AppRouter } from '../../server/src/approuter';

const client = createTRPCClient<AppRouter>({
  links: [
    loggerLink(),
    httpBatchLink({
      url: 'http://localhost:3000/trpc',
    }),
  ],
});

function App() {

  async function sendRequest() {
    try {
      const response = await client.getHello.query();
      console.log(response);
    } catch (error) {
      console.error('Error sending request:', error);
    }
  }

  return (
    <>
      <div>
        <h1>tRPC Client</h1>
        <button onClick={sendRequest} >send request</button>
      </div>
    </>
  )
}

export default App
