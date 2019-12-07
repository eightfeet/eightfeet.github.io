import React from "react";
import ReactApexChart from 'react-apexcharts'
import "./Skills.css";

const data = {
  options: {
    plotOptions: {
      radialBar: {
        offsetY: 20,
        startAngle: 0,
        endAngle: 360,
        hollow: {
          margin: 5,
          size: '30%',
          background: 'transparent',
          image: undefined,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: false,
          }
        }
      }
    },
    colors: ['#f06628', '#0084ff', '#ffc107', '#61dafb', '#41b883'],
    labels: ['HTML5', 'CSS3', 'Javascript/ES6', 'React', 'Vue'],
    legend: {
      show: true,
      floating: true,
      fontSize: '16px',
      position: 'top',
      offsetX: 0,
      offsetY: 10,
      labels: {
          useSeriesColors: true,
      },
      markers: {
          size: 0,
          fillOpacity: 0
      },
      formatter: function(seriesName, opts) {
        switch (seriesName) {
          case 'HTML5':
          return `<div class="icontag icon icon-html5"><span>${opts.w.globals.series[opts.seriesIndex]}%</span></div>`
          case 'CSS3':
          return `<div class="icontag icon icon-css3-alt"><span>${opts.w.globals.series[opts.seriesIndex]}%</span></div>`
          case 'React':
          return `<div class="icontag icon icon-react"><span>${opts.w.globals.series[opts.seriesIndex]}%</span></div>`
          case 'Vue':
          return `<div class="icontag icon icon-vuejs"><span>${opts.w.globals.series[opts.seriesIndex]}%</span></div>`
          case 'Javascript/ES6':
          return `<div class="icontag icon icon-js-square"><span>${opts.w.globals.series[opts.seriesIndex]}%</span></div>`
          default:
            break;
        }
      },
      itemMargin: {
          horizontal: 1,
      }
    },
    responsive: [{
        breakpoint: 480,
        options: {
            legend: {
                show: true
            }
        }
    }]
  },
  series: [98, 97, 98, 95, 90]
}


export default function Skills() {
  return (
    <div className="main" id="skills">
      <div className="skills-main-div">
        <div className="skills-image-div">
          <ReactApexChart 
            options={data.options} 
            series={data.series} 
            type="radialBar" 
            height="350" 
          />
        </div>
        <div className="skills-text-div">
          <h1 className="skills-heading">技能清单</h1>
          <p className="subTitle skills-text-subtitle">
            以下均为我熟练使用的技能{" "}
          </p>
          <div>
            <p className="subTitle skills-text">
              ⚡ 前端底层技术：HTML5，CSS3，JavaScript/ES6
            </p>
            <p className="subTitle skills-text">⚡ react，vue等主流前端框架</p>
            <p className="subTitle skills-text">
              ⚡ webpack，rollup，gulp，babel等打包与构建工具
            </p>
            <p className="subTitle skills-text">
              ⚡ 前端UI框架：Bootstrap，antdesign等
            </p>
            <p className="subTitle skills-text">
              ⚡ 终端开发：公众号，小程序相关开发流程
            </p>
            <p className="subTitle skills-text">
              ⚡ 图形图像：ps，ai，axure，coreldraw等
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
