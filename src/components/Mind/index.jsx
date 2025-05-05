import FormPost from '../formPost';

const Mind = () => {

    return (
        <section className='mind'>
            <h1 className='title'>What’s on your mind?</h1>
            <FormPost>
                <button className='btn btn-create'>Create</button>
            </FormPost>
        </section>
    );
};

export default Mind;