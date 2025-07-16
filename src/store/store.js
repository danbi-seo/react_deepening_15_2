import { create } from 'zustand'; 
import { persist } from 'zustand/middleware';


export const useStore = create(
  persist(
    (set) => ({
      boards: [
        {
          id: 1,
          title: '작업 목록 1',
          desc: '해야 할 작업 목록입니다. 우선순위를 정하고 진행하세요.',
          type: 'todo',
          created_at: '2023-10-01',
        },
        {
          id: 2,
          title: '작업 중 1',
          desc: '현재 진행 중인 작업입니다. 작업 상태를 주기적으로 업데이트하세요.',
          type: 'inprogress',
          created_at: '2023-10-01',
        },
        {
          id: 3,
          title: '완료 1',
          desc: '완료된 작업 목록입니다. 작업 결과를 검토하고 공유하세요.',
          type: 'done',
          created_at: '2023-10-01',
        },
        {
          id: 4,
          title: '작업 목록 2',
          desc: '새로운 작업을 추가하고 계획을 세우세요. 중요한 작업부터 시작하세요.',
          type: 'todo',
          created_at: '2023-10-02',
        },
        {
          id: 5,
          title: '작업 중 2',
          desc: '진행 중인 작업의 세부 사항을 확인하고 필요한 자원을 확보하세요.',
          type: 'inprogress',
          created_at: '2023-10-02',
        },
        {
          id: 6,
          title: '완료 2',
          desc: '모든 작업이 성공적으로 완료되었습니다. 팀과 함께 성과를 축하하세요.',
          type: 'done',
          created_at: '2023-10-02',
        },
      ],
      addBoard: (newBoard) => set((state) => ({ boards: [...state.boards, newBoard] })),
      removeBoard: (id) => set((state) => ({ boards: state.boards.filter((board) => board.id !== id) })),
      updateBoard: (updatedBoard) => set((state) => ({
        boards: state.boards.map((board) =>
          board.id === updatedBoard.id ? { ...board, ...updatedBoard } : board
        ),
      })),
    }),
    {
      name: 'kanban-storage',  // localStorage에 저장되는 키 값
      getStorage: () => localStorage, // 데이터가 저장될 위치 지정
    }
  )
);