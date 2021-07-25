<template>
  <div>
    <form method="POST">
      <div class="space-y-6">
        <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
             role="alert">
                            <span class="block">
        Bedankt voor je bericht, we zullen zo spoedig mogelijk reageren!
                            </span>
        </div>


        <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
             role="alert">
                          <span class="block">
                              Errors.
                          </span>
        </div>

        <div>
          <label for="ContactFormName" class="block text-sm font-medium text-gray-700">
            Naam
          </label>
          <div class="mt-1">
            <input id="ContactFormName" name="contact[first_name]"
                   type="text"
                   required
                   class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
          </div>
        </div>

        <div>
          <label for="ContactFormEmail" class="block text-sm font-medium text-gray-700">
            E-mailadres
          </label>
          <div class="mt-1">
            <input id="ContactFormEmail" name="contact[email]"
                   type="email"
                   required
                   class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
          </div>
        </div>

        <div>
          <label for="ContactFormPhone" class="block text-sm font-medium text-gray-700">
            Telefoon
          </label>
          <div class="mt-1">
            <input id="ContactFormPhone" name="contact[phone]"
                   type="tel"
                   required
                   class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
          </div>
        </div>

        <div>
          <label for="ContactFormMessage" class="block text-sm font-medium text-gray-700">
            Bericht
          </label>
          <div class="mt-1">
                <textarea rows="10" name="contact[body]" id="ContactFormMessage" required
                          class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"></textarea>
          </div>
        </div>

        <div>
          <button type="submit"
                  class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Contact opnemen
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  //
}
</script>
