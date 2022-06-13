import "./ArticleDetailsPage.css";
import EditButton from "../components/articlesFiles/EditButton";
import React from "react";
import { useLocation } from "react-router";

function ArticleDetailsPage() {
  let query = new URLSearchParams(useLocation().search);
  return (
    <div className="SingleArticleCont">
      <h3 className="SingleArticleTitle">{query.get("title")} </h3>
      <img
        src={query.get("image")}
        alt={query.get("alt")}
        id="SingleArticleImg"
      />
      <div className="SingleArticleDetails">
      <h4 className="EveryParaHeadline">Title:</h4>
        <p className="EveryParaInfo">{query.get("title")}</p>
        <h4 className="EveryParaHeadline">Time:</h4>
        <p className="EveryParaInfo">{query.get("time")}</p>
        <h4 className="EveryParaHeadline">City and venue:</h4>
        <p className="EveryParaInfo">{query.get("city")}, {query.get("venue")}</p>
        <h4 className="EveryParaHeadline">Time:</h4>
        <p className="EveryParaInfo">{query.get("time")}</p>
        <h4 className="EveryParaHeadline">Time:</h4>
        <p className="EveryParaInfo">{query.get("time")}</p>
        <h4 className="EveryParaHeadline">Time:</h4>
        <p className="EveryParaInfo">{query.get("time")}</p>
        <h4 className="EveryParaHeadline">Time:</h4>
        <p className="EveryParaInfo">{query.get("time")}</p>
        <h4 className="EveryParaHeadline">Content:</h4>
        <p className="EveryParaInfo">{query.get("content")}</p>
        {/* <h4 className="EveryParaHeadline">Time:</h4>
          <p className="EveryParaInfo">{query.get("time")}</p> */}
      </div>
      <EditButton edit={query.get("edit")} id={query.get("id")} />
    </div>
  );
}

export default ArticleDetailsPage;
