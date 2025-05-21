import { Space, Layout, Divider, Typography } from 'antd';
import logo from '@/style/images/abes.png';
import useLanguage from '@/locale/useLanguage';
import { useSelector } from 'react-redux';

const { Content } = Layout;
const { Title, Text } = Typography;

export default function SideContent() {
  const translate = useLanguage();

  return (
    <Content
      style={{
        padding: '150px 30px 30px',
        width: '100%',
        maxWidth: '450px',
        margin: '0 auto',
      }}
      className="sideContent"
    >
      <div style={{ width: '100%' }}>
        <img
          src={logo}
          alt="ABES LOGO"
          style={{ margin: '0 0 40px', display: 'block' }}
          height={120}
          width={220}
        />

        <Title level={1} style={{ fontSize: 28 }}>
          ABES Engineering College Hostel ERP
        </Title>
        <Text>
          Attendance / Raise Ticket / Leave Request <b />
        </Text>

        <div className="space20"></div>
      </div>
    </Content>
  );
}
