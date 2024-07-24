import { Card } from 'antd'
import React from 'react'
import { StyleNameProduct, WrapperReportText } from './style'
import { StarFilled } from "@ant-design/icons"; 

const CardComponent = () => {
  return (
    <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <StyleNameProduct>Iphone</StyleNameProduct>
    <WrapperReportText>
      <span>4.96 </span> <StarFilled style={{fontSize: '10px', color: 'yellow'}} /> 
      <span> | Da ban 1000+ </span>
    </WrapperReportText>
  </Card>
  )
}

export default CardComponent