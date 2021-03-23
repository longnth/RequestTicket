import React from "react";

const TicketContext = React.createContext({});

export const TicketProvider = TicketContext.Provider;
export const TicketConsumer = TicketContext.Consumer;

export default TicketContext;
