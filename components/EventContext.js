import { createContext, useContext, useState } from 'react';

const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [newsData, setNewsData] = useState(null);
  const [loading, setLoading] = useState(true);

  return (
    <EventContext.Provider value={{ newsData, setNewsData, loading, setLoading }}>
      {children}
    </EventContext.Provider>
  );
};

export const useEventContext = () => {
  return useContext(EventContext);
};

const EventsPageContext = createContext();

export const EventsPageProvider = ({ children }) => {
  const [newsData, setNewsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [pageNo, setPageNo] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  return (
    <EventsPageContext.Provider value={{ newsData, setNewsData, loading, setLoading, pageNo, setPageNo, totalPages, setTotalPages}}>
      {children}
    </EventsPageContext.Provider>
  );
};

export const useEventsPageContext = () => {
  return useContext(EventsPageContext);
};