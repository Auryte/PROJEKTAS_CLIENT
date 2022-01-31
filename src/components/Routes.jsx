import React from 'react';
import { Route, Routes as RoutesPaths } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import RequireAuth from '../routing/RequireAuth';
import RequireLogout from '../routing/RequireLogout';
import AdminLayout from '../components/layouts/AdminLayout';
import GuestLayout from '../components/layouts/GuestLayout';
import Articles from '../pages/public/Articles';
import Contacts from '../pages/public/Contacts';
import Home from '../pages/public/Home';
import Projects from '../pages/public/Projects';
import SingleArticle from '../pages/public/SingleArticle';
import SingleProject from '../pages/public/SingleProject';
import ManageProject from '../pages/protected/ManageProjects';
import ManageArticle from '../pages/protected/ManageArticles';
import CreateProjectForm from '../pages/protected/NewProject';
import CreateArticleForm from '../pages/protected/NewArticle';
import UpdateProjectForm from '../pages/protected/UpdateProject';
import UpdateArticleForm from '../pages/protected/UpdateArticle';
import PageNotFound from './PageNotFound';
import UserProfile from '../pages/protected/UserProfile';
import LoginForm from '../pages/public/Login';

const Routes = () => {
  return (
    <ScrollToTop>
      <RoutesPaths>
        <Route path="/" element={<GuestLayout />}>
          <Route index element={<Home />} />
          <Route path="interjero-dizainas" element={<Projects />} />
          <Route path="interjero-dizainas/:seoUrl" element={<SingleProject />} />
          <Route path="interjero-patarimai" element={<Articles />} />
          <Route path="interjero-patarimai/:seoUrl" element={<SingleArticle />} />
          <Route path="kontaktai" element={<Contacts />} />
          <Route path="login" element={<RequireLogout> <LoginForm /></RequireLogout> } />
        </Route>

        <Route path="/" element={<AdminLayout />}>
          <Route path="manage-projects" element={<RequireAuth><ManageProject /></RequireAuth>} />
          <Route path="manage-articles" element={<RequireAuth><ManageArticle /></RequireAuth>} />
          <Route path="create-project" element={<RequireAuth><CreateProjectForm /></RequireAuth>} />
          <Route path="create-article" element={<RequireAuth><CreateArticleForm/></RequireAuth>} />
          <Route path="update-project/:seoUrl" element={<RequireAuth><UpdateProjectForm/> </RequireAuth>}/>
          <Route path="update-article/:seoUrl" element={<RequireAuth><UpdateArticleForm/> </RequireAuth>}/>
          <Route path="profile/:id" element={<RequireAuth><UserProfile/> </RequireAuth>}/>
        </Route>
        <Route path='*' element={<PageNotFound/>}/>
      </RoutesPaths>

    </ScrollToTop>
  );
};

export default Routes;
