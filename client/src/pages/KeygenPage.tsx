import Layout from '@/components/Layout/Layout';
import { useLoaderData } from 'react-router-dom';

const KeygenPage = () => {
    const key = useLoaderData()

    return (
        <Layout>
            <div className="container">
                <div className="key_title">App login key:</div>
                <div className="key">{key as string}</div>
            </div>
        </Layout>
    );
}

export default KeygenPage;