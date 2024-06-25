import styled from 'styled-components';
import { CloseOutlined } from '@ant-design/icons';
import HistoryIcon from '@mui/icons-material/History';

export function RecentItem({ children, onRemove, header, onItemClick }) {
  return (
    <DDItems $header={header}>
      <DDItem>
        <NewHistoryIcon $header={header} />
        <RecentLink onClick={() => onItemClick(children)}>
          <DDText $header={header}>{children || '최근 검색어가 없습니다.'}</DDText>
          <CloseIcon
            onClick={(event) => {
              event.stopPropagation();
              onRemove(children);
            }}
          />
        </RecentLink>
      </DDItem>
      {/* {children && <CloseIcon onClick={() => onRemove(children)} />} */}
    </DDItems>
  );
}

const DDItems = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${(props) => (props.$header ? '23px' : '28px')};
  color: #666666;
  overflow: hidden;
  font-size: ${(props) => (props.$header ? '13px' : '16px')};
  font-weight: 400;
  width: 100%;
`;

const DDItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  width: 100%;
  &:hover {
    color: #000000;
    background-color: var(--secondary10);
  }
`;

const NewHistoryIcon = styled(HistoryIcon)`
  font-size: ${(props) => (props.$header ? '13px' : '16px')};
  color: #666666;
`;

const RecentLink = styled.div`
  flex-grow: 1;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DDText = styled.div`
  padding-top: 2px;
  width: 100%;
  height: ${(props) => (props.$header ? '23px' : '28px')};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #666666;

  /* &:hover {
    color: #000000;
    background-color: var(--secondary10);
  } */
`;

const CloseIcon = styled(CloseOutlined)`
  font-size: 10px;
  cursor: pointer;
  visibility: hidden; /* 기본적으로는 숨김 처리 */

  ${RecentLink}:hover & {
    visibility: visible; /* RecentLink에 호버할 때만 CloseIcon을 보이도록 함 */
  }

  &:hover {
    color: #000000;
  }
`;
