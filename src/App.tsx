import React, { useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Login from './pages/login/Login';
import Signup from './pages/register/Signup';
import Profile from './pages/profile/Profile';
import UserProfile from './pages/user-profile/UserProfile';
import Notifications from './pages/notifications/Notifications';
import Search from './pages/search/Search';
import Settings from './pages/settings/Settings';
import { createAnimation } from '@ionic/react';
import GeneralTabs from './partials/tabs/general-tabs/general-tab';
import Groups from './pages/groups/Groups';
import CreateGroup from './pages/create-group/CreateGroup';
import BlockList from './pages/block-list/BlockList';
import Events from './pages/events/Events';
import CreateEvent from './pages/create-event/CreateEvent';
import { useSelector } from 'react-redux';
import { RootState } from './server/store';
import Favorites from './pages/favorites/Favorites';
import ViewPost from './pages/view-post/ViewPost';
import Messages from './pages/messages/Messages';
import Chat from './pages/chat/Chat';
import GroupChat from './pages/group-chat/GroupChat';
import ChatGroupMembersList from './pages/chat-group-members-list/ChatGroupMembersList';
import GroupChatMedia from './pages/group-chat-media/GroupChatMedia';
import GroupChatAdminConsole from './pages/group-chat-admin-console/GroupChatAdminConsole';
import Home from './pages/Home/Home';

setupIonicReact();

const App: React.FC = () => {
  const paths: Array<string> = ["/signup", "/messages", "/block/list", "/chat", "/group/chat", "/chat/group/members/list", "/group/chat/media", "/group/chat/admin/console", "/login", "/notifications", "/events", "/favorites", "/groups", "/group/create", "/create/event"];
  const routes = useSelector((state: RootState) => state.routes);
  const RouterAnimation = (baseEl: HTMLElement, opts?: any) => {
    const enteringAnimation = createAnimation()
      .addElement(opts.enteringEl)
      .fromTo('transform', 'translateX(100%)', 'translateX(0%)')
      .fromTo('opacity', 0, 1)
      .duration(200)
      .easing('cubic-bezier(0.11, 0, 0.5, 0)');

    const leavingAnimation = createAnimation()
      .addElement(opts.leavingEl)
      .fromTo('transform', 'translateX(0%)', 'translateX(-100%)')
      .fromTo('opacity', 1, 0)
      .duration(150)
      .easing('cubic-bezier(0.61, 1, 0.88, 1)');

    return createAnimation().addAnimation([enteringAnimation, leavingAnimation]);
  };

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet animated animation={RouterAnimation}>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signin">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/user/:username">
            <UserProfile />
          </Route>
          <Route exact path="/messages">
            <Messages />
          </Route>
          <Route exact path="/chat/:id">
            <Chat />
          </Route>
          <Route exact path="/group/chat/:id">
            <GroupChat />
          </Route>
          <Route exact path="/chat/group/members/list/:id">
            <ChatGroupMembersList />
          </Route>
          <Route exact path="/group/chat/media/:id">
            <GroupChatMedia />
          </Route>
          <Route exact path="/group/chat/admin/console/:id">
            <GroupChatAdminConsole />
          </Route>
          <Route exact path="/notifications">
            <Notifications />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/settings">
            <Settings />
          </Route>
          <Route exact path="/groups">
            <Groups />
          </Route>
          <Route exact path="/group/create">
            <CreateGroup />
          </Route>
          <Route exact path="/blocking">
            <BlockList />
          </Route>
          <Route exact path="/events">
            <Events />
          </Route>
          <Route exact path="/create/event">
            <CreateEvent />
          </Route>
          <Route exact path="/favorites">
            <Favorites />
          </Route>
          <Route exact path="/post/:id">
            <ViewPost />
          </Route>
        </IonRouterOutlet>

        {
          paths.includes(routes.route) ?
            ''
            : <GeneralTabs />
        }
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
