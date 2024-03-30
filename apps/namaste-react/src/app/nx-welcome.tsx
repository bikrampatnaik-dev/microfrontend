import { Fragment } from 'react/jsx-runtime';
import Header from './header';
import Navbar from './NavBar/Navbar';
import LinksTable from '@/libs/shared-react/src/lib/component/ui/links/LinksTable';
import {
  Badge,
  Button,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/shared-react';

import {
  BookmarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ClockIcon,
  Pencil1Icon,
} from '@radix-ui/react-icons';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { columnsDef } from './ColumnDef';
import { useEffect } from 'react';
import React from 'react';
import TransactionActionComponent from './transactions-action';
import TransactionSidePanelComponent from './TransactionSidePanel';
import Analytics from './Analytics';
import './app.module.scss';
import { Transition } from '@headlessui/react';
import DateSearch from './DateSearch';

export default function Example() {
  const [isGroupView, setIsGroupView] = React.useState(true);
  const [isAnalyticOpen, setisAnalyticOpen] = React.useState(false);
  const [rowData, setRowData] = React.useState([]);
  const [releatedRowData, setReleatedRowData] = React.useState([]);
  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    try {
      const response = await fetch('http://localhost:3000/transaction');
      const data = await response.json();
      data.forEach((element: any) => {
        element['subRows'] = [
          {
            id: 'rm5gr84i9',
            dateReceived: '31/02/2024',
            businessDocument: 'X12',
            sender: 'Sender1',
            receiver: 'Receiver2',
            processingStatus: 'Resubmitted',
            userStatus: 'InActive',
            channelId: 'rfyh8vu7d9syhsudb998989',
          },
          {
            id: 'r3u1reuv4',
            dateReceived: '31/02/2024',
            businessDocument: 'X12',
            sender: 'Sender1',
            receiver: 'Receiver2',
            processingStatus: 'Resubmitted',
            userStatus: 'InActive',
            channelId: 'rfyh8vu7d9syhsudb998989',
          },
          {
            id: 'rderv1ws0',
            dateReceived: '31/02/2024',
            businessDocument: 'X12',
            sender: 'Sender1',
            receiver: 'Receiver2',
            processingStatus: 'Resubmitted',
            userStatus: 'InActive',
            channelId: 'rfyh8vu7d9syhsudb998989',
          },
        ];
      });
      setRowData(data);
      getRelatedPost();
    } catch {
      throw new Error('Could not fetch the txn');
    }
  };

  const getRelatedPost = async () => {
    try {
      const response = await fetch('http://localhost:3000/relatedTxn');
      const data = await response.json();
      setReleatedRowData(data);
    } catch {
      throw new Error('Could not fetch the relTxn');
    }
  };

  const setGroupView = (data: boolean) => {
    setIsGroupView(data);
  };
  const setAnalyticView = (data: boolean) => {
    setisAnalyticOpen(data);
  };
  return (
    <Fragment>
      <div className="min-h-full custom-scrollbar">
        <Navbar />
        <Header />
        <main className="relative">
          <div className="mx-auto max-w-9xl mt-2 relative">
            <div className="flex items-center">
              <div
                className={
                  isAnalyticOpen
                    ? 'mx-2 flex items-center w-full justify-content'
                    : 'mx-2 flex items-center w-full'
                }
              >
                <DateSearch />
                {isAnalyticOpen ? (
                  <div className="ml-auto flex items-center">
                    {' '}
                    <Badge className=" rounded-none bg-[#834eef] hover:bg-[#834eef]">
                      Transaction in days
                    </Badge>
                    <Button
                      className="ml-2"
                      variant="outline"
                      size={'icon'}
                      onClick={() => console.log('bookmark clicked')}
                    >
                      <ChevronLeftIcon />
                    </Button>
                    <Button
                      className="ml-2 hover:cursor-pointer"
                      variant="outline"
                      size={'icon'}
                      onClick={() => console.log('bookmark clicked')}
                    >
                      <ChevronRightIcon />
                    </Button>
                  </div>
                ) : undefined}
              </div>
            </div>
            {/* <Transition
              show={isAnalyticOpen}
              as={Fragment}
              enter="transition ease-out duration-300"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-300"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            > */}
              <div className="h-[240px] border m-2 p-2 ">
                <Analytics />
              </div>
            {/* </Transition> */}
            {/* ) : undefined} */}
            <Tabs defaultValue="all" className="w-full mt-2 relative">
              <div className="flex items-center">
                <TabsList className="w-[400px] ml-2">
                  <TabsTrigger value="all">All Transactions</TabsTrigger>
                  <TabsTrigger value="error">In Error</TabsTrigger>
                  <TabsTrigger value="resbmitted">Resubmitted</TabsTrigger>
                </TabsList>
                <TransactionActionComponent
                  setGroupView={setGroupView}
                  setAnalyticView={setAnalyticView}
                />
              </div>
              <div className="flex justify-between">
                <div className="w-[60%]">
                  <TabsContent value="all">
                    <LinksTable
                      tableClassName="pl-2"
                      data={rowData}
                      columnsDef={columnsDef}
                      isGroupView={isGroupView}
                    />
                  </TabsContent>
                  <TabsContent value="error">
                    <LinksTable data={[]} columnsDef={columnsDef} />
                  </TabsContent>
                  <TabsContent value="resbmitted">
                    <LinksTable data={[]} columnsDef={columnsDef} />
                  </TabsContent>
                </div>
                <div className="w-[40%] border mt-2 mr-2 ml-0">
                  <TransactionSidePanelComponent />
                </div>
              </div>
            </Tabs>
          </div>
        </main>
      </div>
    </Fragment>
  );
}
