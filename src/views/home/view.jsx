import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import PostCard from "../../components/card";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, setLoader } from "../../redux/reducers/post/reducer";
import LoaderHome from "./loader";

const HomeView = () => {
  const { posts, isLoading } = useSelector((state) => state.POST);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoader(true));
    dispatch(getPosts({ callback: () => dispatch(setLoader(false)) }));
  }, []);

  return (
    <div>
      <Container>
        <Row>
          {isLoading ? (
            <LoaderHome />
          ) : (
            <>
              {posts?.length > 0 ? (
                posts?.map((post, index) => {
                  return (
                    <Col md={4} key={index}>
                      <PostCard
                        title={post.title}
                        detail={post.content}
                        image={post.image}
                        category={post.category}
                        publishAt={post.publishedAt}
                        id={post.id}
                        btnText={"Read More"}
                      />
                    </Col>
                  );
                })
              ) : (
                <span>No Posts</span>
              )}
            </>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default HomeView;
