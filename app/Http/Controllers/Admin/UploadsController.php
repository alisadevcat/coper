<?php

namespace App\Http\Controllers\Admin;

use App\Models\Uploads;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Upload;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Log;

class UploadsController extends Controller
{

    public function uploadImage(Request $request)
    {

        $user = $request->user(); // Get the authenticated user

        if ($request->hasFile('image')) {
            $request->validate([
                'image' => 'required|image|max:3072', // max size of 3MB
            ]);

            $file = $request->file('image');
            // $filename = "XaYPfty10" . $user->id . '.' . $file->getClientOriginalExtension(); // Create a unique filename

            $filename = $file->getClientOriginalName();
            $path = $file->storeAs('images', $filename, 'public');

            Upload::create([
                'user_id' => $user->id,
                'file_path' => $path,
                'file_type' => 'photo',
                'status' => 'original',
            ]);
            return Redirect::route('userprofile.edit')->with('message', 'File uploaded successfully.');

        }

        return Redirect::route('userprofile.edit')->with(['message' => 'Please upload an file.']);
    }


    public function uploadDocument(Request $request)
    {

        $user = $request->user(); // Get the authenticated user

        if ($request->hasFile('file')) {
            $file = $request->file('file');
            // $filename = $file->getClientOriginalName();

            $date = date('Y-m-d_H-i-s'); // Get the current date and time in a specific format
            $originalName = $file->getClientOriginalName();

            $filename = pathinfo($originalName, PATHINFO_FILENAME) . pathinfo($originalName, PATHINFO_EXTENSION);

            $path = $file->storeAs('docs', $filename, 'public');

            Upload::create([
                'user_id' => $user->id,
                'file_path' => $path,
                'file_type' => 'document',
                'status' => 'original',
            ]);

            return Redirect::route('userprofile.edit')->with('message', 'File uploaded successfully.');
        }

      return Redirect::route('userprofile.edit')->with(['message' => 'Please upload an file.']);
    }
}

     // public function uploadDocumentAsDraft(Request $request)
        // {
        //     $request->validate([
        //         'file' => 'required|file|max:2048',  // Adjust validation for document files if necessary
        //     ]);

        //     $user = auth()->user();
        //     $file = $request->file('file');
        //     $filePath = $file->store('uploads');

        //     // Save the document as "original"
        //     $upload = Upload::create([
        //         'user_id' => $user->id,
        //         'file_path' => $filePath,
        //         'file_type' => 'id_document',  // Or another document type
        //         'status' => 'draft',
        //     ]);

        //     return response()->json(['message' => 'Document uploaded as original', 'file' => $upload]);
