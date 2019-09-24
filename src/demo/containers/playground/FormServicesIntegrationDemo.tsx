import * as React from 'react'
import { TokenContext } from '../App'
import { FormGroup, FormData, ListRequest, ListResponse, StatusEnum } from 'lib/utils/jsonResponses/Forms'
import { SynapseClient } from 'lib'
import { FileUploadComplete } from 'lib/utils/jsonResponses/FileUploadComplete'

type FormServicesIntegrationDemoState = {
  token?: string
  formGroup?: FormGroup
  formData?: FormData
  myFormDataList?: ListResponse
  formAdminFormDataList?: ListResponse
}

class FormServicesIntegrationDemo extends React.Component<{}, FormServicesIntegrationDemoState> {

  constructor(props: any) {
    super(props)
    this.state = {
    }
    this.onCreateFormGroup = this.onCreateFormGroup.bind(this)
    this.onCreateFormData = this.onCreateFormData.bind(this)
    this.onUpdateFormData = this.onUpdateFormData.bind(this)
    this.onSubmitFormData = this.onSubmitFormData.bind(this)
    this.listMyFormData = this.listMyFormData.bind(this)
    this.listFormAdminFormData = this.listFormAdminFormData.bind(this)
  }

  public onCreateFormGroup(): void {
    SynapseClient.createFormGroup('test form group 3', this.state.token!)
      .then((data: FormGroup) => {
        console.log('Successfully created FormGroup', data)
        this.setState({ formGroup: data })
      })
      .catch((error: any) => console.error('Failed to create form group', error))
  }
  public onUpdateFormData(): void {
    SynapseClient.uploadFile(this.state.token, 'my test file', new Blob(['hello form data 2'])).then((fileUploadComplete: FileUploadComplete) => {
      console.log('Successfully created test file handle, now update the form data!')
      SynapseClient.updateFormData(this.state.formData!.formDataId!, 'my test form data', fileUploadComplete.fileHandleId, this.state.token!)
        .then((data: FormData) => {
          console.log('Successfully updated FormData', data)
          this.setState({ formData: data })
        })
        .catch((error: any) => console.error('Failed to update FormData', error))
    }).catch((error: any) => console.error('Failed to update a new file handle:', error))
  }

  public onCreateFormData(): void {
    SynapseClient.uploadFile(this.state.token, 'my test file', new Blob(['hello form data'])).then((fileUploadComplete: FileUploadComplete) => {
      console.log('Successfully created test file handle, now create the form data!')
      SynapseClient.createFormData(this.state.formGroup!.groupId!, 'my test form data', fileUploadComplete.fileHandleId, this.state.token!)
        .then((data: FormData) => {
          console.log('Successfully created FormData', data)
          this.setState({ formData: data })
        })
        .catch((error: any) => console.error('Failed to create FormData', error))
    }).catch((error: any) => console.error('Failed to create a new file handle:', error))
  }

  public onSubmitFormData(): void {
    SynapseClient.submitFormData(this.state.formData!.formDataId!, this.state.token!)
      .then((data: FormData) => {
        console.log('Successfully submitted FormData', data)
      })
      .catch((error: any) => console.error('Failed to submit form data', error))
  }

  private listMyFormData = () => {
    if (this.state.token && this.state.formGroup && !this.state.myFormDataList) {
      let request: ListRequest = {
        groupId: this.state.formGroup.groupId!,
        filterByState: [StatusEnum.ACCEPTED, StatusEnum.SUBMITTED_WAITING_FOR_REVIEW, StatusEnum.WAITING_FOR_SUBMISSION]
      }
      SynapseClient.listFormData(request, this.state.token).then((resp: ListResponse) => {
        console.log('Successfully got a my FormData list', resp)
        this.setState({ myFormDataList: resp })
      }).catch((error: any) => console.error('Failed to get my FormData list', error))
    }
  }

  private listFormAdminFormData = () => {
    if (this.state.token && this.state.formGroup && !this.state.formAdminFormDataList) {
      let request: ListRequest = {
        groupId: this.state.formGroup.groupId!,
        filterByState: [StatusEnum.ACCEPTED, StatusEnum.SUBMITTED_WAITING_FOR_REVIEW]
      }
      SynapseClient.listFormDataAsFormAdmin(request, this.state.token).then((resp: ListResponse) => {
        console.log('Successfully got FormGroup admin list', resp)
        this.setState({ formAdminFormDataList: resp })
      }).catch((error: any) => console.error('Failed to get FormGroup admin FormData list', error))
    }
  }

  public componentDidUpdate() {
    this.listMyFormData()
    this.listFormAdminFormData()
  }

  render() {
    return (
      <TokenContext.Consumer>
        {
          (token: string) => {
            if (token !== this.state.token) {
              this.setState({
                token
              })
            }
            if (token) {
              return <>
                <div>
                  <button className=''
                    onClick={this.onCreateFormGroup}
                  >
                    Create Form Group
                </button>
                  {
                    !this.state.formData && <button
                      onClick={this.onCreateFormData}
                    >
                      Create Form Data
                  </button>
                  }
                  {
                    this.state.formData && <button
                      onClick={this.onUpdateFormData}
                    >
                      Update Form Data
                  </button>
                  }
                  {
                    this.state.formData && <button
                      onClick={this.onSubmitFormData}
                    >
                      Submit Form Data
                  </button>
                  }
                </div>
                {
                  <h3>My FormData</h3>
                }
                {
                  (this.state.myFormDataList) &&
                  <table>
                    <tr>Form Data name<th>Data File Handle ID</th><th>Status</th><th>Rejection Reason</th></tr>
                    {this.state.myFormDataList.page.map((value) => {
                      return <tr><td>{value.name}</td><td>{value.dataFileHandleId}</td><td>{value.submissionStatus.state}</td><td>{value.submissionStatus.rejectionMessage}</td></tr>
                    })}
                  </table>
                }
                {
                  <h3>FormGroup Admin FormData</h3>
                }
                {
                  (this.state.formAdminFormDataList) &&
                  <table>
                    <tr>Form Data name<th>Data File Handle ID</th><th>Status</th><th>Rejection Reason</th></tr>
                    {this.state.formAdminFormDataList.page.map((value) => {
                      return <tr><td>{value.name}</td><td>{value.dataFileHandleId}</td><td>{value.submissionStatus.state}</td><td>{value.submissionStatus.rejectionMessage}</td></tr>
                    })}
                  </table>
                }
              </>
            } else return <><p>Please log in and reload this route</p></>
          }
        }
      </TokenContext.Consumer>
    )
  }
}

export default FormServicesIntegrationDemo