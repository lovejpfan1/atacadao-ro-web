import Template from '../components/Template';
import Header from '../components/Header';
import Welcome from './welcome';

export default function Home() {
  return (
    <div>
      <Header />
      <Template>
        <Welcome />
      </Template>
    </div>
  )
}
