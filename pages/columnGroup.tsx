import type { NextPage } from 'next';
import Head from 'next/head';
import { Container } from '../components/Layouts';
import styled from '@emotion/styled';
import ColumnsGroupExample from '../examples/ColumnsGroupExample';

const Sort: NextPage = () => {
  return (
    <PageContainer>
      <Head>
        <title>react-frame-datagrid</title>
        <meta name='description' content='Index' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Container>
        <div>
          <h2>ColumnsGroup</h2>
          <ColumnsGroupExample />
        </div>
      </Container>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  padding: 20px;
`;

export default Sort;