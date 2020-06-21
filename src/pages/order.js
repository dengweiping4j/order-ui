import React, {Component} from 'react';
import {Checkbox, Too} from 'antd';

class OrderPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      checkedList: []
    }
  }

  openUrl = url => {
    if (url) {
      window.open(url);
    }
  }

  order = (isChecked, name) => {
    const {checkedList = []} = this.state;
    if (isChecked) {
      checkedList.push(name);
    } else {
      const index = checkedList.indexOf(name);
      if (index != -1) {
        checkedList.splice(index, 1);
      }
    }
    this.setState({
      checkedList
    })
  }

  commit = () => {

  }


  render() {
    const data = [
      {
        storeName: '都城快餐',
        url: 'https://dcyzmap.dcyz.com/monthmenu.html',
        mainList: [
          {
            name: '蒜香脆鸡米花',
            price: 20
          },
          {
            name: '宫保鸡丁',
            price: 19
          },
          {
            name: '辣子鸡饭',
            price: 19
          },
          {
            name: '麻辣牛𦟌',
            price: 26
          }
        ],
        otherList: [
          {
            name: '玉米汁',
            price: 8
          },
          {
            name: '老火汤',
            price: 8
          }
        ]
      },
      {
        storeName: '蒸百味',
        mainList: [
          {
            name: '砂锅啤酒鸭饭',
            price: 18.8
          },
          {
            name: '干豆角炒肉饭',
            price: 16.8
          },
          {
            name: '回锅肉饭',
            price: 16.8
          },
          {
            name: '腊肉炒饭',
            price: 14
          }
        ],
        otherList: [
          {
            name: '煎蛋',
            price: 1
          }
        ]
      }, {
        storeName: '都城快餐',
        url: 'https://dcyzmap.dcyz.com/monthmenu.html',
        mainList: [
          {
            name: '蒜香脆鸡米花',
            price: 20
          },
          {
            name: '宫保鸡丁',
            price: 19
          },
          {
            name: '辣子鸡饭',
            price: 19
          },
          {
            name: '麻辣牛𦟌',
            price: 26
          }
        ],
        otherList: [
          {
            name: '玉米汁',
            price: 8
          },
          {
            name: '老火汤',
            price: 8
          }
        ]
      },
      {
        storeName: '蒸百味',
        mainList: [
          {
            name: '砂锅啤酒鸭饭',
            price: 18.8
          },
          {
            name: '干豆角炒肉饭',
            price: 16.8
          },
          {
            name: '回锅肉饭',
            price: 16.8
          },
          {
            name: '腊肉炒饭',
            price: 14
          }
        ],
        otherList: [
          {
            name: '煎蛋',
            price: 1
          }
        ]
      },
    ];

    const listDiv = [];
    data.forEach((item) => {
      const mainList = [];
      item.mainList.forEach((item2) => {
        mainList.push(
          <div style={{display: 'flex'}}>
            <div style={{width: '40%'}}>名称：<span>{item2.name}</span></div>
            <div style={{width: '30%'}}>价格：<span>{item2.price}</span></div>
            <Checkbox style={{width: '10%'}} onChange={(e) => this.order(e.target.checked, item2.name)}></Checkbox>
          </div>
        )
      });
      const otherList = [];
      item.otherList.forEach((item2) => {
        otherList.push(
          <div style={{display: 'flex'}}>
            <div style={{width: '40%'}}>名称：<span>{item2.name}</span></div>
            <div style={{width: '30%'}}>价格：<span>{item2.price}</span></div>
            <Checkbox style={{width: '10%'}} onChange={(e) => this.order(e.target.checked, item2.name)}></Checkbox>
          </div>
        )
      });
      listDiv.push(
        <div>
          <h3><a onClick={() => this.openUrl(item.url)}>{item.storeName}</a></h3>
          <div style={{display: 'flex', margin: '20px'}}>
            <h4>主食：</h4>
            <div style={{width: '40%', marginTop: '20px'}}>
              {mainList}
            </div>
            <h4>配菜：</h4>
            <div style={{width: '40%', marginTop: '20px'}}>
              {otherList}
            </div>
          </div>
        </div>
      )
    })

    const {checkedList = []} = this.state;
    const checkedTags = [];
    checkedList.forEach(item => {
      checkedTags.push(
        checkedList.length > 3 ?
          <a></a>
          : <a style={{marginRight: '10px', color: '#000000'}}>{item}</a>
      )
    })

    return (
      <div style={{display: 'flex'}}>
        <div style={{width: '70%'}}>{listDiv}</div>
        {checkedList.length > 0 ?
          <div style={{
            width: '30%',
            height: '40px',
            position: 'fixed',
            left: '35%',
            bottom: 80,
            backgroundColor: '#fedd32',
            display: 'flex',
            borderRadius: '10px',
          }}>
            <img src={'/images/car.png'} style={{width: '40px', height: '40px', marginLeft: '10px'}}/>
            <div style={{
              padding: '9px 0px 8px 10px',
              textAlign: 'center'
            }}>
              <span style={{color: '#00ff00'}}>{checkedTags}</span>
              <span style={{marginLeft: '20px'}}>总计：<span style={{color: '#ff0000',fontSize:'16px'}}>￥28.00</span></span>
            </div>
            <a
              style={{
                width: '80px',
                height: '40px',
                position: 'absolute',
                right: 0,
                textAlign: 'center',
                padding: '9px 0px 8px 0px',
                borderRadius: '0px 10px 10px 0px',
                backgroundColor: '#fdbe2b',
                color: '#000000'
              }}
              onClick={this.commit}
            >提交</a>
          </div>
          : null}
        <div style={{width: '2px', backgroundColor: '#f6f6f6'}}></div>
        <div style={{width: '30%', marginLeft: '20px'}}>
          <h2 style={{color: '#1890ff'}}>排行榜</h2>
          <h3>今日下单量</h3>
          <div style={{margin: '20px'}}>
            <div style={{display: 'flex'}}>
              <span style={{width: '60%', color: '#dd0000'}}>1.砂锅啤酒鸭饭/蒸百味/8份</span>
              <Checkbox style={{marginLeft: '5px'}} onChange={(e) => this.order(e.target.checked, '砂锅啤酒鸭饭')}/>
            </div>
            <div style={{display: 'flex', marginTop: '5px'}}>
              <span style={{width: '60%', color: '#00dd00'}}>2.蒜香脆鸡米花/都城快餐/5份</span>
              <Checkbox style={{marginLeft: '5px'}} onChange={(e) => this.order(e.target.checked, '蒜香脆鸡米花')}/>
            </div>
            <div style={{display: 'flex', marginTop: '5px'}}>
              <span style={{width: '60%', color: '#00dddd'}}>3.辣子鸡饭/都城快餐/4份</span>
              <Checkbox style={{marginLeft: '5px'}} onChange={(e) => this.order(e.target.checked, '辣子鸡饭')}/>
            </div>
          </div>
          <h3>历史下单量</h3>
          <div style={{margin: '20px'}}>
            <div style={{display: 'flex'}}>
              <span style={{width: '60%', color: '#dd0000'}}>1.砂锅啤酒鸭饭/蒸百味</span>
              <Checkbox style={{marginLeft: '5px'}} onChange={(e) => this.order(e.target.checked, '砂锅啤酒鸭饭')}/>
            </div>
            <div style={{display: 'flex', marginTop: '5px'}}>
              <span style={{width: '60%', color: '#00dd00'}}>2.蒜香脆鸡米花/都城快餐</span>
              <Checkbox style={{marginLeft: '5px'}} onChange={(e) => this.order(e.target.checked, '蒜香脆鸡米花')}/>
            </div>
            <div style={{display: 'flex', marginTop: '5px'}}>
              <span style={{width: '60%', color: '#00dddd'}}>3.辣子鸡饭/都城快餐</span>
              <Checkbox style={{marginLeft: '5px'}} onChange={(e) => this.order(e.target.checked, '辣子鸡饭')}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OrderPage;