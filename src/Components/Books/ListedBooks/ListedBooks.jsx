import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoreRedList } from '../../Utility/Utility';

const ListedBooks = () => {
    const allBooks=useLoaderData();

    useEffect(()=>{
        const storedReadList=getStoreRedList();
        
        console.log(storedReadList,allBooks)

    },[]);
    return (
        <div>
            <h3 className="text-3xl my-8">Listed Books</h3>

            <Tabs>
                <TabList>
                <Tab>Read List</Tab>
                <Tab>Book List</Tab>
                </TabList>

                <TabPanel>
                <h2 className='text-3xl'>Books I Read</h2>
                </TabPanel>
                <TabPanel>
                <h2 className='text-3xl'>My wish List</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;