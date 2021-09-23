import React, { useState, useEffect } from "react";
import axios from "axios";

function ErrorMsg() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState([]);

  const fetchMsgs = async () => {
    try {
      // loading 상태를 true로 초기화
      setLoading(true);
      const response = await axios.get(
        "https://dapi.kakao.com/v2/search/image?query=안녕",
        {
          headers: {
            Authorization: `KakaoAK facbb84a986a578369c2938173b5a8ae`,
          },
        }
      );
      setResult(response.data.documents);
    } catch (e) {
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMsgs();
  }, []);

  if (loading) return <div>로딩중..</div>;
  return (
    <table>
      <tbody>
        {result.map((document, index) => (
          <tr key={index}>
            <td>{document.collection}</td>
            <td>{document.datetime}</td>
            <td>{document.display_sitename}</td>
            <td>{document.doc_url}</td>
            <td>{document.height}</td>
            <td>{document.image_url}</td>
            <td>{document.thumbnail_url}</td>
            <td>{document.width}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ErrorMsg;