import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';
import { QUERY_SINGLE_BUILD } from '../utils/queries';

const SingleBuild = () => {
    const { buildId } = useParams();
    const { loading, data } = useQuery(QUERY_SINGLE_BUILD, {
        variables: { buildId: buildId },
    });

    if (loading) {
        return <div>Loading...</div>;
    }

    const build = data?.build || {};

    return (
        <div className="my-3">
            <h3 className="card-header bg-dark text-light p-2 m-0">
                {build.buildAuthor} <br />
                <span style={{ fontSize: '1rem' }}>
                    posted this build at {build.createdAt}
                </span>
            </h3>
            <div className="bg-light py-4">
                <blockquote
                    className="p-4"
                    style={{
                        fontSize: '1.5rem',
                        fontStyle: 'italic',
                        border: '2px dotted #1a1a1a',
                        lineHeight: '1.5',
                    }}
                >
                    {build.buildText}
                </blockquote>
            </div>
            <div className="my-5">
                <CommentList comments={build.comments} />
            </div>
            <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
                <CommentForm buildId={build._id} />
            </div>
        </div>
    );
};

export default SingleBuild;
