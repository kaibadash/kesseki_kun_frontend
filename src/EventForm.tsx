import * as React from 'react';
import * as SuperAgent from 'superagent';

export interface EventFormProps {
}
export interface EventFormState {
  title: string;
  description: string;
  dueDate: string;
}

class EventForm extends React.Component<EventFormProps, EventFormState> {
  constructor(props: EventFormProps) {
    super(props);
    this.state = {
      title: '',
      description: '',
      dueDate: ''
    };
  }

  onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ title: e.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.title} placeholder="イベントタイトル" onChange={this.onChangeTitle} />
        <input type="textarea" value={this.state.description} placeholder="概要" />
        <input type="text" value="" placeholder="時間"  />
        <input type="text" value={this.state.dueDate} placeholder="締め切りまでの日数" />

        <input type="text" value="" placeholder="TODO:候補日1" />
        <input type="text" value="" placeholder="TODO:候補日2" />
        <input type="text" value="" placeholder="TODO:候補日3" />
        <input type="text" value="" placeholder="TODO:候補日4" />
        <input type="text" value="" placeholder="TODO:候補日5" />

        <input type="submit" />
      </form>
    );
  }
  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log('handleSubmit');
    SuperAgent
      .post('/api/v1/events/new')
      .query({ 
        title: this.state.title,
        description: 'TODO:test description',
        due_date: '2018/12/12',
        user_id: 1
      })
      .end((err: any, res: SuperAgent.Response) => {
        console.log('requested!');
      });
    e.preventDefault();
  }
}
console.log('EventForm.tsx');
export default EventForm;
