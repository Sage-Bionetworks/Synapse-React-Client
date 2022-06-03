import { Tab, Tabs } from '@material-ui/core'
import React from 'react'
import { useParams } from 'react-router'
import { BrowserRouter, Link, NavLink, Route } from 'react-router-dom'
import IconSvg from '../IconSvg'
import AccessRequirementTable from './AccessRequirementTable'
import SubmissionPage from './SubmissionPage'

function LinkTab(props: any) {
  return (
    <NavLink
      className="Tab"
      role="tab"
      style={{ display: 'block' }}
      to={props.href}
      {...props}
    >
      {props.children}
    </NavLink>
  )
}

export default function ReviewerDashboard() {
  return (
    <div className="ReviewerDashboard">
      <BrowserRouter basename="#!DataAccessManagement:default">
        <div className="Tabs">
          <LinkTab href="/AccessRequirements">
            <IconSvg
              options={{
                icon: 'accessClosed',
                padding: 'right',
              }}
            />
            Access Requirements
          </LinkTab>
          <LinkTab href="/Submissions">
            <IconSvg
              options={{
                icon: 'discussion',
                padding: 'right',
              }}
            />
            Submissions
          </LinkTab>
          <LinkTab href="/UserAccessHistory">
            <IconSvg
              options={{
                icon: 'history',
                padding: 'right',
              }}
            />
            User Access History
          </LinkTab>
        </div>
        <Route path="/AccessRequirements">
          <AccessRequirementTable />
        </Route>
        <Route exact path="/Submissions">
          Submissions page here
          <Link to="/Submissions/315">Submission 315</Link>
        </Route>
        <Route path="/Submissions/:id">
          <SubmissionPageRouteRenderer />
        </Route>

        <Route path="/UserAccessHistory">User history page here</Route>
      </BrowserRouter>
    </div>
  )
}

function SubmissionPageRouteRenderer() {
  const { id } = useParams()
  return (
    <SubmissionPage
      submissionId={id}
      onRejectClicked={function (): void {
        throw new Error('Function not implemented.')
      }}
    />
  )
}
