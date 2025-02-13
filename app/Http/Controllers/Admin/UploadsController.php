<?php

namespace App\Http\Controllers\Admin;

use App\Models\Uploads;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Upload;

class UploadsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Uploads $uploads)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Uploads $uploads)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Uploads $uploads)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Uploads $uploads)
    {
        //
    }

    public function uploadImage(Request $request)
    {

        $user = $request->user(); // Get the authenticated user


        if ($request->hasFile('image')) {
            $request->validate([
                'image' => 'required|image|max:3072', // max size of 3MB
            ]);

            $file = $request->file('image');
            $filename = "XaYPfty10" . $user->id . '.' . $file->getClientOriginalExtension(); // Create a unique filename

            $path = $file->store('images', 'public');

            Upload::create([
                'user_id' => $user->id,
                'file_path' => $path,
                'file_type' => 'photo',
                'status' => 'original',
            ]);

            return redirect()->back()->with('message', 'Profile image updated successfully.');
        }

        return redirect()->back()->with(['message' => 'Please upload an image.']);
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