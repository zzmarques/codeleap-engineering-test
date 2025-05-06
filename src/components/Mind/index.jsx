import BtnCreate from '../BtnCreate';
import FormPost from '../formPost';

const Mind = () => {

    return (
        <section className='mind'>
            <h1 className='title'>What’s on your mind?</h1>
            <FormPost>
                <BtnCreate/>
            </FormPost>
        </section>
    );
};

export default Mind;