import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/visitorPages/HomePage';
import AboutPage from './pages/visitorPages/AboutPage';
import UpcomingEventsPage from './pages/visitorPages/UpcomingEventsPage';
import PastEventsPage from './pages/visitorPages/PastEventsPage';
import BlogPage from './pages/visitorPages/BlogPage';
import DonatePage from './pages/visitorPages/DonatePage';
import ContactUsPage from './pages/visitorPages/ContactUsPage';
import ReviewsPage from './pages/visitorPages/ReviewsPage';
import SubmitReviewPage from './pages/visitorPages/SubmitReviewPage';
import CancelBookingPage from './pages/visitorPages/CancelBookingPage';
import BookTicketPage from './pages/visitorPages/BookTicketPage';
import LoginPage from './pages/visitorPages/LoginPage';
import AdminHomePage from './pages/adminPages/AdminHomePage';
import EditInfoAboutAssociationPage from './pages/adminPages/EditInfoAboutAssociationPage';
import EditArticlesPage from './pages/adminPages/EditArticlesPage';
import EditReviewsPage from './pages/adminPages/EditReviewsPage';
import EditUpcomingEventsPage from './pages/adminPages/EditUpcomingEventsPage';
import EditPastEventsPage from './pages/adminPages/EditPastEventsPage';
import AddEventPage from './pages/adminPages/AddEventPage';
import AddArticlePage from './pages/adminPages/AddArticlePage';
import EventDetailsPage from './pages/EventDetailsPage';
import ArticleDetailsPage from './pages/ArticleDetailsPage';
import EvaluationFormPage from './pages/visitorPages/EvaluationFormPage';
import ProtectedPath from "./ProtectedPath";
import { AdminAuthContextProvider } from "./store/authContext/AuthContext";

import VisitorLayout from './components/layouts/visitorLayout/Layout';
import AdminLayout from './components/layouts/adminLayout/Layout';

function App() {
  return (
    <AdminAuthContextProvider>  
      <Routes>      
        <Route path='/' exact element={<VisitorLayout><HomePage /></VisitorLayout>}/>
        <Route path='/About' element={<VisitorLayout><AboutPage /></VisitorLayout>}/>
        <Route path='/UpcomingEvents' element={<VisitorLayout><UpcomingEventsPage /></VisitorLayout>}/>
        <Route path='/PastEvents' element={<VisitorLayout><PastEventsPage /></VisitorLayout>}/>
        <Route path='/Events/:id' element={<VisitorLayout><EventDetailsPage /></VisitorLayout>}/>
        <Route path='/Articles/:id' element={<VisitorLayout><ArticleDetailsPage /></VisitorLayout>}/>
        <Route path='/EvaluationForm/:id' element={<VisitorLayout><EvaluationFormPage /></VisitorLayout>}/>
        <Route path='/Blog' element={<VisitorLayout><BlogPage /></VisitorLayout>}/>
        <Route path='/Donate' element={<VisitorLayout><DonatePage /></VisitorLayout>}/>
        <Route path='/ContactUs' element={<VisitorLayout><ContactUsPage /></VisitorLayout>}/>
        <Route path='/Reviews' element={<VisitorLayout><ReviewsPage /></VisitorLayout>}/>
        <Route path='/SubmitReview' element={<VisitorLayout><SubmitReviewPage /></VisitorLayout>}/>
        <Route path='/CancelTicket' element={<VisitorLayout><CancelBookingPage /></VisitorLayout>}/>
        <Route path='/BookTicket/:id' element={<VisitorLayout><BookTicketPage /></VisitorLayout>}/>
        <Route path='/Login' element={<LoginPage />}/>
        <Route path='/AdminHome' element={<ProtectedPath><AdminLayout><AdminHomePage /></AdminLayout></ProtectedPath>}/>
        <Route path='/EditAssociationInfo' element={<ProtectedPath><AdminLayout><EditInfoAboutAssociationPage /></AdminLayout></ProtectedPath>}/>
        <Route path='/EditArticles' element={<ProtectedPath><AdminLayout><EditArticlesPage /></AdminLayout></ProtectedPath>}/>
        <Route path='/EditReviews' element={<ProtectedPath><AdminLayout><EditReviewsPage /></AdminLayout></ProtectedPath>}/>
        <Route path='/EditUpcomingEvents' element={<ProtectedPath><AdminLayout><EditUpcomingEventsPage /></AdminLayout></ProtectedPath>}/>
        <Route path='/EditPastEvents' element={<ProtectedPath><AdminLayout><EditPastEventsPage /></AdminLayout></ProtectedPath>}/>
        <Route path='/AddEvent' element={<ProtectedPath><AdminLayout><AddEventPage /></AdminLayout></ProtectedPath>}/>
        <Route path='/AddArticle' element={<ProtectedPath><AdminLayout><AddArticlePage /></AdminLayout></ProtectedPath>}/>
      </Routes>
    </AdminAuthContextProvider>  
  );
}

export default App;