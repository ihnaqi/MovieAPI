import { Form, redirect, useActionData } from 'react-router-dom'
import api from '../../../api/axiosConfig'

export async function action({request}) {

   try{
      const formData = await request.formData()
      const imdbId = new URL(await request.url).pathname.split("/")[2]
      const reviewBody = formData.get('review')
      await api.post('/api/v1/reviews', {reviewBody, imdbId})
      formData.set('reviws', "")
      return redirect(new URL(request.url))
   }
   catch(err) {
      return err.message
   }

}

function ReviewForm() {
   const errors = useActionData()

  return (
   <Form method='post' replace>
      <div className='mb-3'>
         <textarea className='w-100 px-2 py-2' placeholder='Write your review here..!' name='review' rows={4} style={{
            "border" : "none",
            "borderRadius" : "5px",
            "outline" : "none"
         }}/>
      </div>
      <button style={{"padding": "4px 8px", "backgroundColor": "#47ABCC", "outline": "none", "border": "none", "borderRadius" : "3px", "cursor" : "pointer"}}> Submit </button>
   </Form>
  )
}

export default ReviewForm