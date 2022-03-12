import React, { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import "./Project.css";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import Button from "../../components/button/Button";
import imagespulld from "./../../assests/images/pulld.svg";
import imagesselect from "./../../assests/images/select.svg";
import imagesgame from "./../../assests/images/game.svg";
import imagesnote from "./../../assests/images/note.svg";


const data = [
  {
    image: imagesgame,
    title: 'yugong',
    description: 'yugong 是一套前端低代码编辑解决方案；',
    url: 'https://github.com/eightfeet/yugong'
  },{
    image: imagespulld,
    title: 'rmc-pull-updown-to-refresh',
    description: '简单易用的react拖拉翻页组件、react列表下拉刷新组件',
    url: 'https://github.com/eightfeet/rmc-pull-updown-to-refresh'
  },{
    image: imagesselect,
    title: '@eightfeet/picker',
    description: '基于底层纯js的select选择器',
    url: 'https://github.com/eightfeet/Picker'
  },{
    image: imagesnote,
    title: '@eightfeet/modal',
    description: '基于底层纯js的模态框，支持多种定制',
    url: 'https://github.com/eightfeet/ModalV2'
  }
]

export default function Projects() {
  const [repo, setrepo] = useState([]);


  return (
    <div className="main" id="opensource">
      <h1 className="project-title">开源项目</h1>
      <div className="repo-cards-div-main">
        {
          data.map((item) => (<Card data={item} />))
        }
        
      </div>
      <Button text={"More Packages"} className="project-button" href="https://www.npmjs.com/~eightfeet" newTab={true} />
    </div>
  );
}
