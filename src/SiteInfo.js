import React, { useState, useEffect } from "react";
import Table from "./components/Table";
import Pagination from "./components/Pagination";
import axios from "axios";

function SiteInfo() {
  const [Post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const fetchInfos = async () => {
    try {
      setLoading(true);// loading 상태를 true로 초기화
      const response = await axios.get( //await를 사용하여 비동기적으로 Rest API를 GET방식으로 호출
        "https://dapi.kakao.com/v2/search/image?query=안녕", //target Rest API
        {
          headers: {
            Authorization: `KakaoAK facbb84a986a578369c2938173b5a8ae`,
          },
        }
      );
      setPost(response.data.documents); //결과 가져오기
    } catch (e) {
    }
    setLoading(false); //loading 끝
  };

  useEffect(() => {
    fetchInfos();
  }, []);

  if (loading) return <div>로딩중..</div>;

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = Post.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
      <div>
      <Table table_data={currentPosts}/>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={Post.length}
        paginate={paginate}
      />
      </div>
      );
    };

export default SiteInfo;