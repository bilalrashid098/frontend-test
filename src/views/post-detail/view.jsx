import { useEffect, useState } from "react";
import { Badge, Breadcrumb, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  clearPostDetail,
  getPostDetail,
  setLoader,
} from "../../redux/reducers/post/reducer";
import styles from "./index.module.css";
import Avatar from "../../components/avatar";
import { routes } from "../../utils/constants";
import { UserModal } from "../../components/modals/user-modal";
import LoaderDetail from "./loader";

const PostDetailView = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { postDetail, isLoading } = useSelector((state) => state.POST);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(setLoader(true));
    if (id) {
      dispatch(
        getPostDetail({ id, callback: () => dispatch(setLoader(false)) })
      );
    }

    return () => {
      dispatch(setLoader(true));
      dispatch(clearPostDetail({}));
    };
  }, [id]);

  return (
    <Container>
      {isLoading ? (
        <LoaderDetail />
      ) : (
        <Row className="justify-content-center">
          <Col md={10}>
            <Link to={routes.home}>Back</Link>
            <h2 className="mt-3 mb-4">{postDetail?.title}</h2>
            <img
              className={`${styles.imgBanner} w-100 mb-5`}
              src={postDetail?.image}
              alt={postDetail?.title}
            />
            <div className="mb-5">
              <Avatar
                className="mb-3"
                id={postDetail?.userId}
                image={postDetail?.user?.image}
                name={`${postDetail?.user?.firstname} ${postDetail?.user?.lastname}`}
                onClick={() => setOpen(true)}
              />
              <Badge bg="light" className="me-2 text-dark text-md">
                {postDetail?.publishedAt}
              </Badge>
              <Badge
                bg="light"
                className="me-2 text-dark text-md text-uppercase"
              >
                {postDetail?.category}
              </Badge>
            </div>
            <p>{postDetail?.content}</p>
          </Col>
        </Row>
      )}

      {/* Author modal */}
      <UserModal user={postDetail?.user} open={open} setOpen={setOpen} />
    </Container>
  );
};

export default PostDetailView;
